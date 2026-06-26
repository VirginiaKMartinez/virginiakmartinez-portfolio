import { useTranslation } from 'react-i18next';

import { CaseTopbar } from '@/components/case/CaseTopbar';
import { Chapter } from '@/components/case/Chapter';
import { StatsRow } from '@/components/case/StatsRow';
import { OtherCases } from '@/components/case/OtherCases';
import { BackFoot } from '@/components/case/BackFoot';

import { GazellaHero } from '@/components/gazella/GazellaHero';
import { ScreenStrip } from '@/components/gazella/ScreenStrip';
import { ScrollPhone } from '@/components/gazella/ScrollPhone';

/**
 * Case study — Gazella · Akimad.
 *
 * Screenshot-driven: real exported frames carry the visual weight,
 * Chapter shells provide the editorial rhythm (same system as Hawi).
 */
export default function CaseGazella() {
  const { t } = useTranslation();
  const gazellaStats = t('case.gazella.stats', { returnObjects: true });

  const calScreens = [
    { src: '/case/gazella/gz-cal-training.png', alt: t('case.gazella.calShots.trainingAlt'), cap: t('case.gazella.calShots.trainingCap') },
    { src: '/case/gazella/gz-cal-month.png',    alt: t('case.gazella.calShots.monthAlt'),    cap: t('case.gazella.calShots.monthCap') },
    { src: '/case/gazella/gz-cal-edit.png',     alt: t('case.gazella.calShots.editAlt'),     cap: t('case.gazella.calShots.editCap') },
  ];

  const nutScreens = [
    { src: '/case/gazella/gz-recetario.png',  alt: t('case.gazella.nutShots.bookAlt'),    cap: t('case.gazella.nutShots.bookCap') },
    { src: '/case/gazella/gz-list.png',       alt: t('case.gazella.nutShots.listAlt'),    cap: t('case.gazella.nutShots.listCap') },
    { src: '/case/gazella/gz-list-empty.png', alt: t('case.gazella.nutShots.emptyAlt'),   cap: t('case.gazella.nutShots.emptyCap') },
    { src: '/case/gazella/gz-premium.png',    alt: t('case.gazella.nutShots.premiumAlt'), cap: t('case.gazella.nutShots.premiumCap') },
  ];

  return (
    <div data-screen-label="Case · Gazella">
      <CaseTopbar caseLabel={t('case.topbar.gazellaOf')} />

      <div className="wrap">
        <GazellaHero />

        {/* 01 · Context */}
        <Chapter
          id="context"
          num={t('case.gazella.context.num')}
          title={t('case.gazella.context.title')}
          titleIt={t('case.gazella.context.titleIt')}
          gutter={t('case.gazella.context.gutter')}
          left={t('case.gazella.context.left')}
          rightTop={t('case.gazella.context.rightTop')}
          rightBottom={t('case.gazella.context.rightBottom')}
        >
          <StatsRow stats={gazellaStats} />
        </Chapter>

        {/* 02 · The calendar */}
        <Chapter
          id="calendar"
          num={t('case.gazella.calendar.num')}
          title={t('case.gazella.calendar.title')}
          titleIt={t('case.gazella.calendar.titleIt')}
          gutter={t('case.gazella.calendar.gutter')}
          left={t('case.gazella.calendar.left')}
          rightTop={t('case.gazella.calendar.rightTop')}
          rightBottom={t('case.gazella.calendar.rightBottom')}
        >
          <ScreenStrip kicker={t('case.gazella.calShots.kicker')} screens={calScreens} />
        </Chapter>

        {/* 03 · Nutrition & revenue */}
        <Chapter
          id="nutrition"
          num={t('case.gazella.nutrition.num')}
          title={t('case.gazella.nutrition.title')}
          titleIt={t('case.gazella.nutrition.titleIt')}
          gutter={t('case.gazella.nutrition.gutter')}
          left={t('case.gazella.nutrition.left')}
          rightTop={t('case.gazella.nutrition.rightTop')}
          rightBottom={t('case.gazella.nutrition.rightBottom')}
        >
          <ScreenStrip kicker={t('case.gazella.nutShots.kicker')} screens={nutScreens} />

          <section className="gz-callout" data-screen-label="Proposal">
            <div className="tag">{t('case.gazella.callout.tag')}</div>
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t('case.gazella.callout.heading') }} />
              <p>{t('case.gazella.callout.body')}</p>
            </div>
          </section>

          <figure className="gz-recipe">
            <ScrollPhone
              src="/case/gazella/gz-recipe-full.png"
              alt={t('case.gazella.recipe.alt')}
              hint={t('case.gazella.recipe.scrollHint')}
            />
            <figcaption className="gz-recipe__cap">
              <span className="tag">{t('case.gazella.recipe.tag')}</span>
              <span>{t('case.gazella.recipe.cap')}</span>
              <span>Figma · 2019</span>
            </figcaption>
          </figure>
        </Chapter>

        {/* 04 · Reflection */}
        <Chapter
          id="reflection"
          num={t('case.gazella.reflection.num')}
          title={t('case.gazella.reflection.title')}
          titleIt={t('case.gazella.reflection.titleIt')}
          gutter={t('case.gazella.reflection.gutter')}
          left={t('case.gazella.reflection.left')}
          rightTop={t('case.gazella.reflection.rightTop')}
        />

        <OtherCases exclude="gazella" />
        <BackFoot mid={t('case.gazella.foot.mid')} />
      </div>
    </div>
  );
}
