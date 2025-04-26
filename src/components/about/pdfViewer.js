// /components/PDFViewer.js

'use client';

import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { GlobalWorkerOptions } from "pdfjs-dist/build/pdf";
import LoginModal from "../loginModal";
import { useAuth } from "../../context/AuthContext";
GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

export default function PDFViewer({ file }) {
    const canvasRef = useRef(null);
    const { user } = useAuth();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [pdfDoc, setPdfDoc] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPdf = async () => {
            const loadingTask = pdfjsLib.getDocument(file);
            const loadedPdf = await loadingTask.promise;
            setPdfDoc(loadedPdf);
            setNumPages(loadedPdf.numPages);
            setPageNumber(1);
        };
        loadPdf();
    }, [file]);

    useEffect(() => {
        const renderPage = async () => {
            if (!pdfDoc) return;
            setLoading(true);
            const page = await pdfDoc.getPage(pageNumber);
            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            context.clearRect(0, 0, canvas.width, canvas.height);
            await page.render({ canvasContext: context, viewport }).promise;
            // ✅ Draw watermark after page is rendered
            const watermarkText = "NEELAM ENTERPRISES";
            context.font = "bold 90px sans-serif";
            context.fillStyle = "rgba(255, 0, 0, 0.25)";
            context.textAlign = "center";
            context.translate(canvas.width / 2, canvas.height / 2);
            context.rotate(Math.PI / 4); // Rotate for diagonal watermark
            context.fillText(watermarkText, 0, 0);
            context.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
            setLoading(false);
        };
        renderPage();
    }, [pdfDoc, pageNumber]);

    const nextPage = () => {
        if (pageNumber < numPages) setPageNumber((prev) => prev + 1);
    };
    const prevPage = () => {
        if (pageNumber > 1) setPageNumber((prev) => prev - 1);
    };

    return (
        <div className="relative flex flex-col items-center" onContextMenu={(e) => e.preventDefault()}>
            <div className="w-full flex items-center justify-center transition-all duration-200 ease-in-out relative mb-4">
                {/* Show canvas */}
                <canvas
                    ref={canvasRef}
                    className={`rounded-lg shadow-md max-w-full min-h-[475px] max-h-[475px] overflow-hidden ${
                        !user ? 'filter blur-md brightness-75' : ''
                    }`}
                />

                {/* Show overlay button if not logged in */}
                {!user && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            onClick={() => setShowLoginModal(true)}
                            className="bg-orangee text-white px-6 py-2 rounded shadow-lg hover:bg-orange-600"
                        >
                            View Document
                        </button>
                    </div>
                )}

                {/* Overlay loader */}
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/60 dark:bg-black/40 rounded-lg">
                        <div className="w-5 h-5 border-2 border-orangee border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </div>

            {/* Pagination Controls */}
            {numPages && (
                <div className="mt-2 flex gap-3 justify-center items-center text-sm">
                    <button
                        onClick={prevPage}
                        disabled={pageNumber === 1 || loading}
                        className="px-4 py-1 bg-orangee text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Prev
                    </button>
                    <span className="text-gray-800 dark:text-gray-300">{pageNumber} / {numPages}</span>
                    <button
                        onClick={nextPage}
                        disabled={pageNumber === numPages || loading}
                        className="px-4 py-1 bg-orangee text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            )}

            {/* Login Modal */}
            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
        </div>
    );
}
