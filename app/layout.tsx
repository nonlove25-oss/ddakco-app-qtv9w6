import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "분기점 - 다중엔딩 비주얼 노벨",
  description: "직관적인 스토리 에디터와 멀티엔딩 관리 시스템을 갖춘 비주얼 노벨 플랫폼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
