/**getBasicUrl 신고 외 모달이 열린 위치에 따라 쿼리에 사용할 api, idData를 전처리해주는 컴포넌트*/

const getDataForApi = ({ position, postData, comment, isReport = false }) => {
  const reportUrl = isReport ? '/report' : '';
  const positionsConfig = {
    activity: { url: `/activity${reportUrl}`, idData: postData.data._id },
    post: {
      url: `/community/post${reportUrl}`,
      idData: postData ? postData.data._id : '',
    },
    comment: {
      url: `/community/comment${reportUrl}/${comment.post_id}`,
      idData: comment.comment_id,
    },
    reply: {
      url: `/community/reply${reportUrl}/${comment.post_id}/${comment.comment_id}`,
      idData: comment.reply_id,
    },
  };

  return positionsConfig[position] || {};
};

export default getDataForApi;
