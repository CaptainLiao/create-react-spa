import React, { Component } from 'react'
import style from './article.scss'
import png from './1.png'

export default class Article extends Component {
  render() {
    return (
      <div className={style.article}>
        <img src={png} alt="1.png" />
        我是一个粉刷匠，啦啦啦
        我是一个粉刷匠，dd
        我是一个粉刷匠，dd
      </div>
    )
  }
}