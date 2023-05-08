import {useCookies} from '@vueuse/integrations/useCookies'


const cookies = useCookies(['cookie-name'], {doNotParse: false, autoUpdateDependencies: false})

export const getCookie = (name) => {
    return cookies.get(name)
}

export const setCookie = (name, value) => {
    return cookies.set(name, value)
}

export const removeCookie = (name) => {
    return cookies.remove(name)
}

export const toast = (msg, type = 'success', dangerouslyUseHTMLString = false) => {
    ElNotification({
        message: msg,
        type: type,
        duration: 3000,
        dangerouslyUseHTMLString
    })
}
