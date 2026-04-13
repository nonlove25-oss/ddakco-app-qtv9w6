"use client";

import { useState } from "react";
import styles from "./page.module.css";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "직관적인 스토리 에디터",
    description: "코딩 없이 드래그앤드롭으로 스토리 분기와 선택지를 만들 수 있는 에디터입니다. 개인사업자가 빠르게 게임 내용을 기획하고 수정할 수 있어, 아이디어를 즉시 프로토타입으로 구현할 수 있습니다.",
    icon: "✏️",
  },
  {
    title: "멀티엔딩 관리 시스템",
    description: "최대 20개 이상의 다양한 엔딩을 체계적으로 관리하고 분기 흐름을 시각적으로 보여줍니다. 어느 선택이 어느 엔딩으로 연결되는지 한눈에 파악할 수 있어, 스토리 품질 관리가 쉬워집니다.",
    icon: "🌳",
  },
  {
    title: "자동 저장 및 버전 관리",
    description: "작업 중인 모든 내용이 자동으로 클라우드에 저장되고, 이전 버전으로 되돌릴 수 있습니다. 1인 개발자가 실수로 인한 손실 없이 안심하고 작업할 수 있습니다.",
    icon: "💾",
  },
  {
    title: "게임 빌드 및 배포 원클릭",
    description: "완성한 게임을 웹, 모바일, PC 형식으로 자동 변환하고 주요 플랫폼(스팀, 앱스토어 등)에 직접 배포할 수 있습니다. 개인사업자가 별도 개발팀 없이 전 플랫폼 출시를 달성할 수 있습니다.",
    icon: "🚀",
  },
  {
    title: "플레이어 분석 대시보드",
    description: "사용자가 어느 선택지를 많이 클릭했는지, 어느 엔딩이 인기 있는지 등의 통계를 실시간으로 볼 수 있습니다. 이 데이터를 바탕으로 게임을 개선하고 마케팅 전략을 수립할 수 있습니다.",
    icon: "📊",
  },
];

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  return (
    <main className={styles.main}>
      {/* 헤더 */}
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>분기점</h1>
          <p className={styles.subtitle}>다중엔딩 비주얼 노벨 플랫폼</p>
        </div>
      </header>

      {/* 영웅 섹션 */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h2>당신의 스토리를 게임으로 만드세요</h2>
            <p>
              복잡한 코딩 없이 직관적인 인터페이스로 다양한 엔딩을 가진 비주얼 노벨을
              만들고, 한 번의 클릭으로 전 플랫폼에 배포하세요.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary}>지금 시작하기</button>
              <button className={styles.btnSecondary}>데모 보기</button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}>📖</div>
          </div>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>핵심 기능</h2>
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${styles.featureCard} ${
                  selectedFeature === index ? styles.active : ""
                }`}
                onClick={() =>
                  setSelectedFeature(
                    selectedFeature === index ? null : index
                  )
                }
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>다양한 엔딩</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>코딩 불필요</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>5분</div>
              <div className={styles.statLabel}>평균 배포 시간</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>∞</div>
              <div className={styles.statLabel}>가능성</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>지금 바로 시작하세요</h2>
          <p>개인사업자를 위한 완벽한 비주얼 노벨 플랫폼</p>
          <button className={styles.btnLarge}>가입 및 프로젝트 생성</button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; 2024 분기점. 모든 권리 보유.</p>
          <div className={styles.footerLinks}>
            <a href="#">개인정보처리방침</a>
            <a href="#">이용약관</a>
            <a href="#">문의하기</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
