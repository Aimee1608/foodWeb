import axios from 'axios'

export default {
  GetFocus: () => axios.get('GetFocus'),
  Recommend: () => axios.get('Recommend'),
  classList: () => axios.get('class_list'),
  IndexShowList: ({pageId}) => axios.get(`IndexShowList?pageId=${pageId}`),
  searchShowList: ({pageId, classId, name}) => axios.get(classId || name ? `show_list?pageId=${pageId}&class_id=${classId}&name=${name}` : `IndexShowList?pageId=${pageId}`),
  FoodInfoData: ({id}) => axios.get(`FoodInfoData?id=${id}`),
  suggestionBack: ({email, content}) => axios.post(`GetLeave?email=${email}&content=${content}`)
}
