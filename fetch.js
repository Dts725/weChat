const url = 'https://xzfwzx.teda.gov.cn/v1';
import app from './app.js'
const tokens = wx.getStorageSync('token')
console.log(tokens)
const token = `&client_id=yhxcx&client_secret=880055513D7EF8FAF30E7DA7B03B9582&token=${tokens}`
const detailUrl = {
 
  warrant: url +`/api?method=tjkfqExchange.tjoa.auth${token}`,//授权接口
  registerUrl: url + `/api?method=tjkfqExchange.tjoa.register${token}`,//注册接口
  loginUrl: url + `/api?method=tjkfqExchange.yhxcx.login${token}`,//登录接口i
  submitApplicantBaseInfo: url + `/api?method=tjkfqExchange.yhxcx.submitApplicantBaseInfo`,//事项申办提交进本信息
  getMaterials: url + `/api?method=tjkfqExchange.yhxcx.getMaterials${token}`,//事项申办申请材料信息
  submitEform2: url + '/api?method=tjkfqExchange.yhxcx.submitEform2',//电子表单提交信息
  fileuploadSqcl: url + `/taiji/framework/hn/common/plugins/upload/fileUp.jsp?file_types_code=hn.dict.sys.fileupload.sqcl&filetype=ts${token}`,//申请材料上传
  delFile: url + '/api?method=delFile.jsp',//删除附件
  submitMaterials: url + '/api',//材料列表提交
  getBjProcessing: url + '/api',//办件查询
  subPjTs: url + '/api',//评价接收端口
  onlineQuestion: url + '/api',//在线提问接口
};
module.exports = detailUrl;