"use client";
import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Button, Text } from "@mantine/core";
import { MdOutlineDownload } from "react-icons/md";
import { configStore } from "@/store/config-store";
import { useAuthStore } from "@/store/user-store";
import { ButtonCopy } from "./button-copy";

export const QrCode = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const user = useAuthStore((state) => state.user);
  const baseFrontUrl = configStore((state) => state.baseFrontUrl);
  const qrValue = `${baseFrontUrl}/amigos/nuevo/${user?.token}`;

  const downloadQRCode = () => {
    const mainCanvas = canvasRef.current;
    const qrCanvas = document.getElementById("qr-gen") as HTMLCanvasElement;

    if (!mainCanvas || !qrCanvas) {
      console.error("No se encontraron los elementos canvas");
      return;
    }

    const ctx = mainCanvas.getContext("2d");
    if (!ctx) {
      console.error("No se pudo obtener el contexto del canvas principal");
      return;
    }

    // Limpiar canvas principal
    ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

    ctx.fillStyle = "#ffffff"; // Fondo blanco
    ctx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
    // Dibujar el texto en el canvas principal
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#000";
    ctx.fillText("Código QR amigos", mainCanvas.width / 2, 40);

    // Dibujar el QR Code en el canvas principal
    const qrX = (mainCanvas.width - qrCanvas.width) / 2;
    const qrY = 60; // Espacio debajo del texto
    ctx.drawImage(qrCanvas, qrX, qrY);

    // Convertir el canvas a imagen y descargar
    const pngUrl = mainCanvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-amigos.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col items-center">
      <Text className="text-lg font-semibold text-gray-600 mb-2">
        Código QR amigos
      </Text>
      {/* Canvas principal para descargar */}
      <canvas
        ref={canvasRef}
        width={300}
        height={350}
        style={{ display: "none" }}
      />

      {/* Canvas para generar el QR */}
      <QRCodeCanvas
        id="qr-gen"
        value={qrValue}
        title="QR amigos"
        size={250}
        bgColor="#ffffff"
        fgColor="#000000"
        level="L"
        // Oculto, solo usado para dibujar en el principal
      />

      <div className="mt-3">
        <Button
          color="orange"
          onClick={downloadQRCode}
          rightSection={<MdOutlineDownload size={25} />}
        >
          Descargar QR
        </Button>
      </div>

      <div>
        <ButtonCopy value={qrValue} />
      </div>
    </div>
  );
};
