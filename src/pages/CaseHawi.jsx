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
 * Composition only. Hawi components carry the visual weight;
 * Chapter shells provide the editorial rhythm.
 */
export default function CaseHawi() {
  const { t } = useTranslation();
  const hawiStats = t('case.hawi.stats', { returnObjects: true });

  return (
    <div data-screen-label="Case · Hawi">
      <CaseTopbar caseLabel={t('case.topbar.hawiOf')} />

      <main className="wrap">
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

        <BrandKit />
        <MockupStage />

        <OtherCases exclude="hawi" />
        <BackFoot mid={t('case.hawi.foot.mid')} />
      </main>
    </div>
  );
}
