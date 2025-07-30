// auto_talkatone.js - Talkatone 登录自动全局代理
if ($request) {
  // 登录请求，切全局代理
  $policy.select("TALKATONE");
  $done();
} else {
  // 登录结束，恢复正常分流
  $policy.select("PROXY");
  $done();
}
