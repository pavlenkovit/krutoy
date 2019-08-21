import React, { PureComponent } from 'react';
import YouTube from 'react-youtube';
import SelectGroup from '../../../../../../components/SelectGroup';
import models from '../../../../../../constants/models';
import docs from './constants/docs';
import CustomHead from '../../../../../../components/CustomHead';

import css from './Construct.module.scss';

class Construct extends PureComponent {
  state = { activeItem: 'moose', videoIsOpen: false };

  closePopup = () => {
    this.setState({ videoIsOpen: false });
  };

  openPopup = () => {
    this.setState({ videoIsOpen: true });
  };

  onChangeModel = (item) => {
    this.setState({ activeItem: item.model });
  };

  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const { activeItem, videoIsOpen } = this.state;

    return (
      <>
        <CustomHead
          title="Инструкция и сборка"
          url="/info/construct"
        />
        <h1>Инструкция и сборка</h1>
        <div className={css.textBlock}>
          <p>Выберите модель качалки из списка и посмотрите как легко ее собрать.</p>
          <div className={css.selectWrap}>
            <SelectGroup
              name="model"
              activeItem={activeItem}
              items={models}
              changeData={this.onChangeModel}
              white
            />
          </div>
          <p><a href={`/docs/${docs[activeItem].doc}`} download className={css.linkDownload}>Скачать инструкцию</a> (PDF, 1.6 Мбайт)</p>
          <p>Видеоинструкция по сборке</p>
          <div className={css.videoLink} onClick={this.openPopup}>
            <img src="/static/img/video.png" alt="" />
          </div>
        </div>
        {videoIsOpen && (
          <div className={css.popup} onClick={this.closePopup}>
            <YouTube
              videoId={docs[activeItem].video}
              opts={{
                height: '100%',
                width: '100%',
                playerVars: {
                  autoplay: 1,
                },
              }}
              onReady={this._onReady}
            />
            <svg className={css.close} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#fff" d="M505.943 6.058c-8.077-8.077-21.172-8.077-29.249 0L6.058 476.693c-8.077 8.077-8.077 21.172 0 29.249A20.612 20.612 0 0 0 20.683 512a20.614 20.614 0 0 0 14.625-6.059L505.943 35.306c8.076-8.076 8.076-21.171 0-29.248z" />
              <path fill="#fff" d="M505.942 476.694L35.306 6.059c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.076-8.077 21.171 0 29.248l470.636 470.636a20.616 20.616 0 0 0 14.625 6.058 20.615 20.615 0 0 0 14.624-6.057c8.075-8.078 8.075-21.173-.001-29.25z" />
            </svg>
          </div>
        )}
      </>
    );
  }
}

export default Construct;
