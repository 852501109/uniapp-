
let host = '';

if(process.env.NODE_ENV === 'development')
{
  console.log('开发环境');


  //host = 'http://api.youhujun.com';
  host = 'https://xykdev.qdfqxx.com/';

}
else
{
  console.log('生产环境');

  host = 'https://www.fanqie.com';
}

export default{
	host
}
