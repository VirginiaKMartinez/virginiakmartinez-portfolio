import { useTranslation } from 'react-i18next';

import { CaseTopbar } from '@/components/case/CaseTopbar';
import { CaseHero } from '@/components/case/CaseHero';
import { Chapter } from '@/components/case/Chapter';
import { StatsRow } from '@/components/case/StatsRow';
import { TokenTable } from '@/components/case/TokenTable';
import { ComponentSnapshot } from '@/components/case/ComponentSnapshot';
import { CodePeek } from '@/components/case/CodePeek';
import { OtherCases } from '@/components/case/OtherCases';
import { BackFoot } from '@/components/case/BackFoot';

import { DashboardPlate } from '@/components/case/plates/DashboardPlate';
import { FilterPlate } from '@/components/case/plates/FilterPlate';
import { DialogPlate } from '@/components/case/plates/DialogPlate';
import { DocPlate } from '@/components/case/plates/DocPlate';
import { LibraryPlate } from '@/components/case/plates/LibraryPlate';

/**
 * Case study — Staff & Go.
 *
 * Composition only. Each chapter is a thin block of i18n-driven copy.
 * The Plates carry the visual weight; everything else is editorial chrome.
 */
export default function CaseStaffAndGo() {
  const { t } = useTranslation();

  return (
    <div data-screen-label="Case · Staff & Go">
      <CaseTopbar />

      <div className="wrap">
        <CaseHero />

        <Chapter
          id="context"
          num={t('case.context.num')}
          title={t('case.context.title')}
          titleIt={t('case.context.titleIt')}
          gutter={t('case.context.gutter')}
          left={t('case.context.left')}
          rightTop={t('case.context.rightTop')}
          rightBottom={t('case.context.rightBottom')}
        >
          <StatsRow />
        </Chapter>

        <Chapter
          id="approach"
          num={t('case.approach.num')}
          title={t('case.approach.title')}
          titleIt={t('case.approach.titleIt')}
          gutter={t('case.approach.gutter')}
          left={t('case.approach.left')}
          rightTop={t('case.approach.rightTop')}
          rightBottom={t('case.approach.rightBottom')}
        >
          <TokenTable />
          <ComponentSnapshot />
          <DashboardPlate />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--col-gap)] mt-8">
            <FilterPlate />
            <DialogPlate />
          </div>
        </Chapter>

        <Chapter
          id="documentation"
          num={t('case.documentation.num')}
          title={t('case.documentation.title')}
          titleIt={t('case.documentation.titleIt')}
          gutter={t('case.documentation.gutter')}
          left={t('case.documentation.left')}
          rightTop={t('case.documentation.rightTop')}
          rightBottom={t('case.documentation.rightBottom')}
        >
          <DocPlate />

          <figure className="case-artifact">
            <span className="case-artifact__tag">{t('case.docShot.tag')}</span>
            <img
              className="doc-shot__img"
              src="/case/staff-and-go/sg-doc-buttons.svg"
              alt={t('case.docShot.alt')}
              loading="lazy"
            />
            <figcaption className="case-artifact__cap">
              <span>{t('case.docShot.cap')}</span>
              <span>{t('case.docShot.meta')}</span>
            </figcaption>
          </figure>
        </Chapter>

        <Chapter
          id="engineering"
          num={t('case.engineering.num')}
          title={t('case.engineering.title')}
          titleIt={t('case.engineering.titleIt')}
          gutter={t('case.engineering.gutter')}
          left={t('case.engineering.left')}
          rightTop={t('case.engineering.rightTop')}
        >
          <CodePeek />
        </Chapter>

        <Chapter
          id="outcomes"
          num={t('case.outcomes.num')}
          title={t('case.outcomes.title')}
          titleIt={t('case.outcomes.titleIt')}
          gutter={t('case.outcomes.gutter')}
          left={t('case.outcomes.left')}
          rightTop={t('case.outcomes.rightTop')}
        >
          <LibraryPlate />
        </Chapter>

        <OtherCases />
        <BackFoot />
      </div>
    </div>
  );
}
