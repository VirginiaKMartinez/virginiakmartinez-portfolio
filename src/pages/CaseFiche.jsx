import { useTranslation } from 'react-i18next';

import { CaseTopbar } from '@/components/case/CaseTopbar';
import { Chapter } from '@/components/case/Chapter';
import { StatsRow } from '@/components/case/StatsRow';
import { OtherCases } from '@/components/case/OtherCases';
import { BackFoot } from '@/components/case/BackFoot';

import { FicheHero } from '@/components/fiche/FicheHero';
import { BeforeAfter } from '@/components/fiche/BeforeAfter';
import { ScrollPhone } from '@/components/case/ScrollPhone';

/**
 * Case study — Fiche salarié redesign · Staff & Go.
 *
 * Real product screens, anonymised (browser chrome cropped, client/
 * establishment names blurred). The before → after carries the weight.
 */
export default function CaseFiche() {
  const { t } = useTranslation();
  const ficheStats = t('case.fiche.stats', { returnObjects: true });

  return (
    <div data-screen-label="Case · Fiche salarié">
      <CaseTopbar caseLabel={t('case.topbar.ficheMid')} caseTitle={t('case.topbar.ficheShort')} />

      <div className="wrap">
        <FicheHero />

        {/* 01 · Context */}
        <Chapter
          id="context"
          num={t('case.fiche.context.num')}
          title={t('case.fiche.context.title')}
          titleIt={t('case.fiche.context.titleIt')}
          gutter={t('case.fiche.context.gutter')}
          left={t('case.fiche.context.left')}
          rightTop={t('case.fiche.context.rightTop')}
          rightBottom={t('case.fiche.context.rightBottom')}
        >
          <StatsRow stats={ficheStats} />
        </Chapter>

        {/* 02 · The problem */}
        <Chapter
          id="problem"
          num={t('case.fiche.problem.num')}
          title={t('case.fiche.problem.title')}
          titleIt={t('case.fiche.problem.titleIt')}
          gutter={t('case.fiche.problem.gutter')}
          left={t('case.fiche.problem.left')}
          rightTop={t('case.fiche.problem.rightTop')}
        />

        {/* 03 · The redesign */}
        <Chapter
          id="redesign"
          num={t('case.fiche.redesign.num')}
          title={t('case.fiche.redesign.title')}
          titleIt={t('case.fiche.redesign.titleIt')}
          gutter={t('case.fiche.redesign.gutter')}
          left={t('case.fiche.redesign.left')}
          rightTop={t('case.fiche.redesign.rightTop')}
          rightBottom={t('case.fiche.redesign.rightBottom')}
        >
          <BeforeAfter
            before={{
              label: t('case.fiche.ba.beforeLabel'),
              note: t('case.fiche.ba.beforeNote'),
              src: '/case/fiche-salarie/before-record.png',
              alt: t('case.fiche.ba.beforeAlt'),
            }}
            after={{
              label: t('case.fiche.ba.afterLabel'),
              note: t('case.fiche.ba.afterNote'),
              src: '/case/fiche-salarie/after-record.png',
              alt: t('case.fiche.ba.afterAlt'),
            }}
          />
        </Chapter>

        {/* Mobile + sectioned-order note */}
        <section className="fiche-mobile" data-screen-label="Mobile">
          <div className="fiche-mobile__copy">
            <div className="kicker">{t('case.fiche.mobile.kicker')}</div>
            <h3 dangerouslySetInnerHTML={{ __html: t('case.fiche.mobile.heading') }} />
            <p>{t('case.fiche.mobile.body')}</p>
          </div>
          <ScrollPhone
            src="/case/fiche-salarie/after-mobile.png"
            alt={t('case.fiche.mobile.alt')}
            hint={t('case.fiche.mobile.scrollHint')}
          />
        </section>

        {/* 04 · Outcome */}
        <Chapter
          id="outcome"
          num={t('case.fiche.outcome.num')}
          title={t('case.fiche.outcome.title')}
          titleIt={t('case.fiche.outcome.titleIt')}
          gutter={t('case.fiche.outcome.gutter')}
          left={t('case.fiche.outcome.left')}
          rightTop={t('case.fiche.outcome.rightTop')}
        />

        <OtherCases exclude="fiche-salarie" />
        <BackFoot mid={t('case.topbar.ficheOf')} />
      </div>
    </div>
  );
}
