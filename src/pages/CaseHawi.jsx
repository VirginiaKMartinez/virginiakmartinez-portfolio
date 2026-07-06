import { useTranslation } from 'react-i18next';

import { CaseTopbar } from '@/components/case/CaseTopbar';
import { Chapter } from '@/components/case/Chapter';
import { StatsRow } from '@/components/case/StatsRow';
import { OtherCases } from '@/components/case/OtherCases';
import { BackFoot } from '@/components/case/BackFoot';

import { HawiHero } from '@/components/hawi/HawiHero';
import { OhanaFlow } from '@/components/hawi/OhanaFlow';
import { BrandKit } from '@/components/hawi/BrandKit';
import { ActorCards } from '@/components/hawi/ActorCards';
import { ProcessThree } from '@/components/hawi/ProcessThree';
import { MockupStage } from '@/components/hawi/MockupStage';

/**
 * Case study — Hawi · Akimad.
 *
 * Real exported artefacts (workshop photo, flow map, brand board, hi-fi frames)
 * carry the visual weight; Chapter shells provide the editorial rhythm.
 */
export default function CaseHawi() {
  const { t } = useTranslation();
  const hawiStats = t('case.hawi.stats', { returnObjects: true });

  return (
    <div data-screen-label="Case · Hawi">
      <CaseTopbar caseLabel={t('case.topbar.hawiMid')} caseTitle={t('case.topbar.hawiShort')} />

      <div className="wrap">
        <HawiHero />

        {/* 01 · Context */}
        <Chapter
          id="context"
          num={t('case.hawi.context.num')}
          title={t('case.hawi.context.title')}
          titleIt={t('case.hawi.context.titleIt')}
          gutter={t('case.hawi.context.gutter')}
          left={t('case.hawi.context.left')}
          rightTop={t('case.hawi.context.rightTop')}
          rightBottom={t('case.hawi.context.rightBottom')}
        >
          <StatsRow stats={hawiStats} />
        </Chapter>

        <OhanaFlow />

        {/* 02 · Research */}
        <Chapter
          id="research"
          num={t('case.hawi.research.num')}
          title={t('case.hawi.research.title')}
          titleIt={t('case.hawi.research.titleIt')}
          gutter={t('case.hawi.research.gutter')}
          left={t('case.hawi.research.left')}
          rightTop={t('case.hawi.research.rightTop')}
        />

        <figure className="artifact ratio-16x9 artifact--inset artifact--photo">
          <img src="/case/hawi/hawi-workshop.jpg" alt={t('case.hawi.plates.workshop.alt')} loading="lazy" decoding="async" />
          <span className="tag">{t('case.hawi.plates.workshop.tag')}</span>
          <figcaption className="cap">
            <span>{t('case.hawi.plates.workshop.cap')}</span>
            <span>{t('case.hawi.plates.workshop.meta')}</span>
          </figcaption>
        </figure>

        <ActorCards />

        {/* 03 · Design */}
        <Chapter
          id="design"
          num={t('case.hawi.design.num')}
          title={t('case.hawi.design.title')}
          titleIt={t('case.hawi.design.titleIt')}
          gutter={t('case.hawi.design.gutter')}
          left={t('case.hawi.design.left')}
          rightTop={t('case.hawi.design.rightTop')}
        >
          <ProcessThree />
        </Chapter>

        <figure className="artifact paper-frame">
          <img src="/case/hawi/hawi-flowmap.webp" alt={t('case.hawi.plates.flowmap.alt')} loading="lazy" decoding="async" />
          <span className="tag">{t('case.hawi.plates.flowmap.tag')}</span>
          <figcaption className="cap">
            <span>{t('case.hawi.plates.flowmap.cap')}</span>
            <span>{t('case.hawi.plates.flowmap.meta')}</span>
          </figcaption>
        </figure>

        {/* 04 · Brand */}
        <figure className="artifact ratio-portrait">
          <img src="/case/hawi/hawi-brand-discovery.webp" alt={t('case.hawi.plates.brand.alt')} loading="lazy" decoding="async" />
          <span className="tag">{t('case.hawi.plates.brand.tag')}</span>
          <figcaption className="cap">
            <span>{t('case.hawi.plates.brand.cap')}</span>
            <span>{t('case.hawi.plates.brand.meta')}</span>
          </figcaption>
        </figure>

        <BrandKit />
        <MockupStage />

        {/* 04 · Epilogue */}
        <Chapter
          id="epilogue"
          num={t('case.hawi.epilogue.num')}
          title={t('case.hawi.epilogue.title')}
          titleIt={t('case.hawi.epilogue.titleIt')}
          gutter={t('case.hawi.epilogue.gutter')}
          left={t('case.hawi.epilogue.left')}
          rightTop={t('case.hawi.epilogue.rightTop')}
          rightBottom={t('case.hawi.epilogue.rightBottom')}
        />

        <OtherCases exclude="hawi" />
        <BackFoot mid={t('case.topbar.hawiOf')} />
      </div>
    </div>
  );
}
