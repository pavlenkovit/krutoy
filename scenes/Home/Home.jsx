import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';

import CustomHead from '../../components/CustomHead';
import Slider360 from './components/Slider360';
import ModelLinks from './components/ModelLinks';
import Podium from './components/Podium';
import IdeaSection from './components/IdeaSection';
import ConstructSection from './components/ConstructSection';

import css from './Home.module.scss';

class Home extends PureComponent {
  state = { isShowFAQ: true };

  componentDidMount() {
    window.addEventListener('scroll', this.changeViewFAQ);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeViewFAQ);
  }

  changeViewFAQ = () => {
    const { innerHeight } = window;

    const footer = document.querySelector('#footer');
    const footerTop = footer ? footer.getBoundingClientRect().top : 0;

    this.setState({ isShowFAQ: footerTop > innerHeight });
  };

  scrollTo = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { isMobile, model, isLoadingApp } = this.props;
    const { isShowFAQ } = this.state;

    return (
      <main className={css.container}>
        <CustomHead />
        <section className={css.firstScreen} style={{ background: model.colors.main }}>
          <ModelLinks id={model.id} />
          <Slider360 gallery3d={model.gallery3d} id={model.id} name={model.name} price={model.price} isLoadingApp={isLoadingApp} isMobile={isMobile} />
          <Podium currentColors={model.colors} isMobile={isMobile}>
            {!isMobile && (
              <div className={css.button} onClick={this.scrollTo}>
                <span>Игрушка с историей</span>
                <svg className={css.buttonSvg} viewBox="0 0 8 20">
                  <g fill="none" fillRule="evenodd">
                    <path d="M4.067.472V14.17" stroke="#FFF" strokeLinecap="square" />
                    <path
                      d="M3.167 19.372l-2.75-5.704a1 1 0 0 1 .9-1.434h5.5a1 1 0 0 1 .901 1.434l-2.75 5.704a1 1 0 0 1-1.801 0z"
                      fill="#FFF"
                    />
                  </g>
                </svg>
              </div>
            )}
          </Podium>
        </section>
        <IdeaSection />
        <ConstructSection />
        <Link href="/info?id=faq" as="/info/faq">
          <a className={cn(css.faqLink, { [css.faqLink_hide]: !isShowFAQ })}>
            <svg className={css.faqSvg} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.188 35.375c9.492 0 17.187-7.695 17.187-17.188C35.375 8.695 27.68 1 18.187 1 8.695 1 1 8.695 1 18.188c0 9.492 7.695 17.187 17.188 17.187zm1.131-14.443h-2.68v-2.96c.88-.18 1.66-.48 2.36-.94.7-.46 1.04-.96 1.04-1.54 0-1.06-.96-1.6-2.3-1.6-1.14 0-2.34.38-3.58 1.12v-2.52c1.14-.78 2.48-1.18 4.04-1.18 1.3 0 2.42.36 3.34 1.08.94.7 1.4 1.68 1.4 2.92 0 .98-.36 1.82-1.08 2.52-.72.7-1.56 1.2-2.54 1.5v1.6zm-1.28 4.88c-.98 0-1.74-.78-1.74-1.76 0-.96.76-1.72 1.74-1.72.96 0 1.74.76 1.74 1.72 0 .98-.78 1.76-1.74 1.76z" fill="#FFF" fillRule="evenodd" />
            </svg>
          </a>
        </Link>
      </main>
    );
  }
}

Home.propTypes = {
  model: PropTypes.object,
  isMobile: PropTypes.bool.isRequired,
};

export default Home;
