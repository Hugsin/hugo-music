import http from '@/axios';
import {
  GET_PERSONALIZED,
  GET_PRIVATE_CONTENT,
  GET_NEW_SONG,
  GET_PERSONALIZED_MV,
  GET_DJ_PROGRAM,
  GET_CAT_LIST,
  GET_CAT_HOT,
  GET_PLAY_HIGH_QUALITY,
  GET_PLAY_LIST_DETAIL,
} from '@/constant/api';



export const get_play_list_detail = async (args: any) => {
  const { response }: any = await http(`${GET_PLAY_LIST_DETAIL}?${args}`);
  return response;
};
export const get_play_high_qualty = async (args: any) => {
  const { response }: any = await http(`${GET_PLAY_HIGH_QUALITY}?${args}`);
  return response;
};
export const get_cat_hot = async () => {
  const { response }: any = await http(`${GET_CAT_HOT}`);
  return response;
};
export const get_cat_list = async () => {
  const { response }: any = await http(`${GET_CAT_LIST}`);
  return response;
};
export const get_dj_program = async () => {
  const { response }: any = await http(`${GET_DJ_PROGRAM}`);
  return response;
};

export const get_personalized_mv = async () => {
  const { response }: any = await http(`${GET_PERSONALIZED_MV}`);
  return response;
};
export const get_personalized = async () => {
  const { response }: any = await http(`${GET_PERSONALIZED}`);
  return response;
};
export const get_new_song = async () => {
  const { response }: any = await http(`${GET_NEW_SONG}`);
  return response;
};
// 独家放送
// 说明 : 调用此接口 , 可获取独家放送

// 接口地址 : /personalized/privatecontent

// 调用例子 : /personalized/privatecontent
export const get_private_content = async () => {
  const { response }: any = await http(`${GET_PRIVATE_CONTENT}`);
  return response;
};