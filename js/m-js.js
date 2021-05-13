FC.client.on('ready.done', changeCompanyField);
FC.client.on('render.done', changeCompanyField);
 
function changeCompanyField () {
  $('#fc #shipping_company').attr('placeholder','Company');
  $('#fc #billing_company').attr('placeholder','Company');
}
