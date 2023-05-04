import { ss } from '@/utils/storage'


const LOCAL_NAME = 'userStorage'


export interface UserInfo {
  avatar: string
  name: string
  description: string
	token : string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://raw.githubusercontent.com/Chanzhaoyu/chatgpt-web/main/src/assets/avatar.jpg',
      name: 'GPT-4',
      description: '<a href="/guide/getToken.html" class="text-blue-500" target="_blank" >如何取得自己的Token</a>',
			token: ''
    },
  }
}


export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
