import { playMode } from 'common/js/config'

// 定义一些底层的数据
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {}
}

export default state
