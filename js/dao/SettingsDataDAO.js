/**
 * Created by wangdi on 4/12/16.
 */
'use strict';

const SHOW_THUMBNAIL = '@ShowThumbnail';
const THEME_COLOR = '@ThemeColor';
const DISPLAY_ORDER = '@DisplayOrder';
const NIGHT_MODE = '@NightMode';

import {AsyncStorage} from 'react-native';

export default class SettingsDataDAO{

    saveShowThumbnail(value){
        AsyncStorage.setItem(SHOW_THUMBNAIL, value+'');
    }

    getShowThumbnailValue() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(SHOW_THUMBNAIL, (error, result) => {
                if(!error){
                    if(result === 'true')
                        resolve(true);
                    else
                        resolve(false);
                }else{
                    reject(true);
                }
            });
        });
    }

    saveOpenNightMode(value){
        AsyncStorage.setItem(NIGHT_MODE, value+'');
    }

    getOpenNightModeValue(){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(NIGHT_MODE, (error, result) => {
                if(!error){
                    if(result === 'true')
                        resolve(true);
                    else
                        resolve(false);
                }else{
                    reject(false);
                }
            });
        });
    }

    saveThemeColor(color){
        AsyncStorage.setItem(THEME_COLOR, color);
    }

    getThemeColorValue(){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(THEME_COLOR, (error, result) => {
                if(!error && result){
                    resolve(result);
                }else{
                    reject('#1e90ff');
                }
            });
        });
    }

    saveDisplayOrder(order){
        AsyncStorage.setItem(DISPLAY_ORDER, JSON.stringify({order: order}));
    }

    getDisplayOrderValue(){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(DISPLAY_ORDER, (error, result) => {
                if(!error){
                    const data = JSON.parse(result);
                    if(data)
                        resolve(data.order);
                    else
                        reject(['Android','iOS','前端','拓展资源','休息视频','App']);
                }else
                    reject(['Android','iOS','前端','拓展资源','休息视频','App']);
            });
        });
    }

}