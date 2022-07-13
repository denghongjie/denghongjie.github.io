/*
 * @Description:扩展类方法
 * @Author: r_yuesheng
 * @Date: 2021-06-019 08:48:24
 * @LastEditTime: 2022-06-19 13:25:24
 * @LastEditors: r_yuesheng
 */

function getGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
