import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Link from 'next/link';
import LogoIcon from '../../../../icons/LogoIcon';

import css from './Logo.module.scss';

class Logo extends PureComponent {
  time = 650;

  state = {
    text: 'bottom', // bottom | top | center
    translate: true,
    mouseOver: false,
    isCenterComplete: false,
  };

  handleHover = () => {
    this.setState({
      text: 'center',
      translate: true,
      mouseOver: true,
    }, () => {
      setTimeout(() => {
        if (this.state.mouseOver) {
          this.setState({ isCenterComplete: true });
        }
      }, this.time);
    });
  };

  handleOver = () => {
    this.setState({
      text: this.state.isCenterComplete ? 'top' : 'bottom',
      mouseOver: false,
      isCenterComplete: false,
    }, () => {
      setTimeout(() => {
        if (!this.state.mouseOver) {
          this.setState({ text: 'bottom', translate: false });
        }
      }, this.time);
    });
  };

  render() {
    const { text, translate } = this.state;
    const { isMobile, menuIsActive, closeMenu, router: { route }, router } = this.props;
    const isCart = route === '/cart';

    const classesLogo = cn(css.logo, {
      [css.top]: text === 'top',
      [css.center]: text === 'center',
      [css.bottom]: text === 'bottom',
      [css.translate]: translate,
    });

    let color = isCart ? '#9faeb9' : '#fff';
    color = menuIsActive ? '#A0AEB9' : color;

    return (
      <Link href="/">
        <a className={classesLogo} onMouseOver={this.handleHover} onMouseLeave={this.handleOver} onClick={closeMenu}>
          <div className={css.icon}>
            <LogoIcon color={color} />
          </div>
          {!isMobile && (
            <div className={css.text}>
              <svg
                viewBox="0 0 157 30"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-118.000000, -52.000000)" fill={color}>
                    <g transform="translate(41.224866, 27.191406)">
                      <g id="lettering" transform="translate(76.494055, 24.478098)">
                        <path
                          className={cn(css.path, css.path_0)}
                          d="M7.79574815,29.1401544 L1.77854205,29.1401544 C1.28617523,29.1401544 0.930638027,29.0302511 0.710281895,28.809895 C0.490475279,28.5906379 0.381121488,28.2345511 0.381121488,27.7427338 L0.381121488,2.58696571 C0.381121488,2.09514841 0.490475279,1.73961121 0.710281895,1.51870556 C0.930638027,1.29944846 1.28617523,1.18899564 1.77854205,1.18899564 L7.79574815,1.18899564 C8.28701593,1.18899564 8.64310265,1.29944846 8.86290927,1.51870556 C9.08271588,1.73961121 9.19316871,2.09514841 9.19316871,2.58696571 L9.19316871,11.5155104 L10.7461024,11.5155104 L14.7449343,2.47046821 C14.9257252,2.00392867 15.1719087,1.67476826 15.481836,1.4802394 C15.7928623,1.28626007 16.1934599,1.18899564 16.6858267,1.18899564 L22.6640171,1.18899564 C23.1036304,1.18899564 23.4014683,1.29944846 23.5569815,1.51870556 C23.7124947,1.73961121 23.6987568,2.05668225 23.5179658,2.47046821 L19.5581497,11.5155104 C21.0072248,11.5929923 22.1650561,12.1045922 23.0332923,13.0492111 C23.8998798,13.9943795 24.3334484,15.2423316 24.3334484,16.7947158 L24.3334484,27.7427338 C24.3334484,28.2345511 24.2229956,28.5906379 24.003189,28.809895 C23.7833823,29.0302511 23.4267461,29.1401544 22.9360278,29.1401544 L16.9572879,29.1401544 C16.4654706,29.1401544 16.1093839,29.0302511 15.8895773,28.809895 C15.6697706,28.5906379 15.5598673,28.2345511 15.5598673,27.7427338 L15.5598673,20.172594 C15.5598673,19.758808 15.4560087,19.4351428 15.248841,19.2021478 C15.0422227,18.9691528 14.7311964,18.8526553 14.3174104,18.8526553 L9.19316871,18.8526553 L9.19316871,27.7427338 C9.19316871,28.2345511 9.08271588,28.5906379 8.86290927,28.809895 C8.64310265,29.0302511 8.28701593,29.1401544 7.79574815,29.1401544"
                          id="Fill-1"
                        />
                        <path
                          className={cn(css.path, css.path_1)}
                          d="M34.6861202,8.17692271 L34.6861202,13.1456513 L37.5974588,13.1456513 C38.270067,13.1456513 38.7228687,12.9714545 38.9558637,12.621962 C39.1888587,12.2724695 39.3053562,11.8394504 39.3053562,11.3212563 L39.3053562,10.0013176 C39.3053562,9.48422255 39.1888587,9.05010449 38.9558637,8.70061197 C38.7228687,8.35111945 38.270067,8.17692271 37.5974588,8.17692271 L34.6861202,8.17692271 Z M33.2881501,29.1398796 L27.3099597,29.1398796 C26.8181424,29.1398796 26.4620557,29.0299763 26.242249,28.8101697 C26.0218929,28.5903631 25.9125391,28.2342764 25.9125391,27.7424591 L25.9125391,2.58669095 C25.9125391,2.09542317 26.0218929,1.73933645 26.242249,1.51898032 C26.4620557,1.2991737 26.8181424,1.18872088 27.3099597,1.18872088 L40.2367867,1.18872088 C43.134937,1.18872088 45.1346277,1.79099101 46.2347598,2.99388271 C47.3343424,4.19787345 47.8849579,5.75740138 47.8849579,7.67191701 L47.8849579,9.45784576 C47.8849579,10.545339 47.7228505,11.4701753 47.3991853,12.2334538 C47.0755201,12.9967323 46.5128151,13.5473478 45.7110705,13.883652 C47.1084911,14.0386156 48.2404951,14.6084643 49.1076322,15.5915494 C49.9747693,16.575184 50.4083379,17.8819343 50.4083379,19.5123499 L50.4083379,27.7424591 C50.4083379,28.2342764 50.2978851,28.5903631 50.0780784,28.8101697 C49.8582718,29.0299763 49.5016356,29.1398796 49.0109173,29.1398796 L42.9937112,29.1398796 C42.5013444,29.1398796 42.1452577,29.0299763 41.9254511,28.8101697 C41.7056444,28.5903631 41.5957411,28.2342764 41.5957411,27.7424591 L41.5957411,21.8032843 C41.5957411,21.2339852 41.4858378,20.8130555 41.2654817,20.5410448 C41.0456751,20.2695837 40.6637611,20.1338531 40.1202892,20.1338531 L34.6861202,20.1338531 L34.6861202,27.7424591 C34.6861202,28.2342764 34.5756674,28.5903631 34.3558607,28.8101697 C34.1355046,29.0299763 33.7799674,29.1398796 33.2881501,29.1398796 L33.2881501,29.1398796 Z"
                        />
                        <path
                          className={cn(css.path, css.path_2)}
                          d="M75.6747237,21.8032294 C75.6747237,22.9934822 75.4999774,24.0738317 75.1504849,25.0442779 C74.8009924,26.0152736 74.1800387,26.8439446 73.2870743,27.5291917 C72.3941099,28.2149883 71.1714356,28.7524155 69.6185019,29.1403742 C68.0655682,29.5283329 66.0856601,29.7223122 63.6787776,29.7223122 C61.2718952,29.7223122 59.2925366,29.5283329 57.7390534,29.1403742 C56.1861196,28.7524155 54.9639948,28.2149883 54.0710305,27.5291917 C53.1780661,26.8439446 52.5571124,26.0152736 52.2070704,25.0442779 C51.8575778,24.0738317 51.6833811,22.9934822 51.6833811,21.8032294 L51.6833811,2.586636 C51.6833811,2.09536822 51.7927349,1.7392815 52.013091,1.51892537 C52.2328976,1.29911875 52.5884348,1.18866593 53.0808017,1.18866593 L59.1760391,1.18866593 C59.6667574,1.18866593 60.0233936,1.29911875 60.2432002,1.51892537 C60.4624573,1.7392815 60.5734597,2.09536822 60.5734597,2.586636 L60.5734597,20.2887618 C60.5734597,20.8075054 60.767439,21.2405244 61.1553977,21.5894674 C61.5439059,21.93896 62.4104935,22.1131567 63.756809,22.1131567 C65.1284023,22.1131567 66.0081782,21.93896 66.3961369,21.5894674 C66.7846451,21.2405244 66.9786244,20.8075054 66.9786244,20.2887618 L66.9786244,2.586636 C66.9786244,2.09536822 67.0885278,1.7392815 67.3083344,1.51892537 C67.528141,1.29911875 67.8842277,1.18866593 68.3765945,1.18866593 L74.2767536,1.18866593 C74.7685709,1.18866593 75.1246576,1.29911875 75.3444642,1.51892537 C75.5642709,1.7392815 75.6747237,2.09536822 75.6747237,2.586636 L75.6747237,21.8032294 Z"
                          id="Fill-5"
                        />
                        <path
                          className={cn(css.path, css.path_3)}
                          d="M91.7073083,29.1401544 L85.4180915,29.1401544 C84.9262742,29.1401544 84.5701875,29.0302511 84.3503809,28.809895 C84.1305743,28.5906379 84.020671,28.2345511 84.020671,27.7427338 L84.020671,8.68165365 L78.3139417,8.68165365 C77.8215749,8.68165365 77.4660377,8.57175034 77.2462311,8.35139421 C77.0258749,8.13213711 76.9165212,7.77605039 76.9165212,7.28423309 L76.9165212,2.58696571 C76.9165212,2.09514841 77.0258749,1.73961121 77.2462311,1.51870556 C77.4660377,1.29944846 77.8215749,1.18899564 78.3139417,1.18899564 L98.8114581,1.18899564 C99.3027259,1.18899564 99.6588126,1.29944846 99.8786193,1.51870556 C100.098975,1.73961121 100.208879,2.09514841 100.208879,2.58696571 L100.208879,7.28423309 C100.208879,7.77605039 100.098975,8.13213711 99.8786193,8.35139421 C99.6588126,8.57175034 99.3027259,8.68165365 98.8114581,8.68165365 L93.1047289,8.68165365 L93.1047289,27.7427338 C93.1047289,28.2345511 92.9942761,28.5906379 92.7744694,28.809895 C92.5546628,29.0302511 92.1985761,29.1401544 91.7073083,29.1401544"
                          id="Fill-7"
                        />
                        <path
                          className={cn(css.path, css.path_4)}
                          d="M109.836518,20.4053142 C109.836518,20.9235083 110.031047,21.3565274 110.419006,21.7060199 C110.807514,22.0555124 111.700478,22.2297092 113.097899,22.2297092 C114.49532,22.2297092 115.388284,22.0555124 115.776243,21.7060199 C116.164751,21.3565274 116.35873,20.9235083 116.35873,20.4053142 L116.35873,9.96230194 C116.35873,9.47158367 116.164751,9.05010449 115.776243,8.70061197 C115.388284,8.35111945 114.49532,8.17692271 113.097899,8.17692271 C111.700478,8.17692271 110.807514,8.35111945 110.419006,8.70061197 C110.031047,9.05010449 109.836518,9.47158367 109.836518,9.96230194 L109.836518,20.4053142 Z M125.132311,21.8032843 C125.132311,22.9935371 124.957565,24.0738867 124.608072,25.0443329 C124.25858,26.0153286 123.637626,26.8439995 122.744662,27.5292467 C121.851697,28.2150433 120.622429,28.751921 119.056307,29.1404292 C117.490734,29.5283878 115.504232,29.7223672 113.097899,29.7223672 C110.691017,29.7223672 108.697371,29.5283878 107.119159,29.1404292 C105.540398,28.751921 104.305085,28.2150433 103.412121,27.5292467 C102.519156,26.8439995 101.897653,26.0153286 101.54816,25.0443329 C101.198668,24.0738867 101.024471,22.9935371 101.024471,21.8032843 L101.024471,8.56488138 C101.024471,7.37462856 101.198668,6.29372953 101.54816,5.32383284 C101.897653,4.35283711 102.519156,3.51867101 103.412121,2.81968597 C104.305085,2.12125045 105.540398,1.57722907 107.119159,1.18872088 C108.697371,0.800762203 110.691017,0.606782865 113.097899,0.606782865 C115.504232,0.606782865 117.490734,0.800762203 119.056307,1.18872088 C120.622429,1.57722907 121.851697,2.12125045 122.744662,2.81968597 C123.637626,3.51867101 124.25858,4.35283711 124.608072,5.32383284 C124.957565,6.29372953 125.132311,7.37462856 125.132311,8.56488138 L125.132311,21.8032843 Z"
                          id="Fill-9"
                        />
                        <path
                          className={cn(css.path, css.path_5)}
                          d="M135.064548,29.1401544 C134.572181,29.1401544 134.216644,29.0302511 133.996288,28.809895 C133.776481,28.5906379 133.667127,28.2345511 133.667127,27.7427338 L133.667127,22.7734558 L127.726854,14.8153573 C127.131178,14.0136126 126.737174,13.3146276 126.543195,12.7189517 C126.348666,12.1238252 126.251951,11.2308609 126.251951,10.0400585 L126.251951,2.58696571 C126.251951,2.09514841 126.361854,1.73961121 126.581661,1.51870556 C126.801468,1.29944846 127.157554,1.18899564 127.649921,1.18899564 L133.627562,1.18899564 C134.119379,1.18899564 134.474917,1.29944846 134.695822,1.51870556 C134.915079,1.73961121 135.024983,2.09514841 135.024983,2.58696571 L135.024983,8.95366433 C135.024983,9.21193711 135.038171,9.48394779 135.064548,9.76859736 C135.089826,10.0537964 135.193684,10.3252576 135.375025,10.5835304 L137.160404,13.3783715 C137.28954,13.611916 137.42582,13.7806176 137.568145,13.8833772 C137.709921,13.9872358 137.884667,14.0388904 138.091835,14.0388904 L138.480343,14.0388904 C138.686961,14.0388904 138.862257,13.9872358 139.004581,13.8833772 C139.146357,13.7806176 139.282087,13.611916 139.412323,13.3783715 L141.198252,10.5835304 C141.379042,10.3252576 141.482352,10.0537964 141.508179,9.76859736 C141.534006,9.48394779 141.547744,9.21193711 141.547744,8.95366433 L141.547744,2.58696571 C141.547744,2.09514841 141.657098,1.73961121 141.877454,1.51870556 C142.097261,1.29944846 142.452798,1.18899564 142.944615,1.18899564 L148.729376,1.18899564 C149.220094,1.18899564 149.57673,1.29944846 149.796537,1.51870556 C150.016343,1.73961121 150.126796,2.09514841 150.126796,2.58696571 L150.126796,10.0400585 C150.126796,11.2308609 150.022938,12.1238252 149.81577,12.7189517 C149.608602,13.3146276 149.220094,14.0136126 148.651344,14.8153573 L142.750636,22.8119219 L142.750636,27.7427338 C142.750636,28.2345511 142.640732,28.5906379 142.420376,28.809895 C142.20057,29.0302511 141.845032,29.1401544 141.353215,29.1401544 L135.064548,29.1401544 Z"
                        />
                        <circle className={cn(css.path, css.path_6)} cx="154.74279" cy="3.67171464" r="2.44780976" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          )}
        </a>
      </Link>
    );
  }
}

Logo.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  menuIsActive: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default Logo;
