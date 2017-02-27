import first from './components/First';
import home from './components/Home';
import find from './components/Find';
import mzine from './components/Mzine';
import shopping from './components/Shopping';
import mine from './components/Mine';
import guanyu from './components/Guanyu';
import login from './components/Login';
import register from './components/Register';
import test from './components/Test';
import addgress from './components/Addgress';
import phonetest from './components/Phonetest';
import jieshao from './components/Jieshao';
import tuihuo from './components/Tuihuo';
import chima from './components/Chima';
import faxian from './components/Faxian';
import tuijian from './components/Tuijian';

module.exports = function(VueRouter)
{
	const router = new VueRouter({
		routes : [
			{
				path : "/",
				redirect : '/home'
			},
			{
				name : "first",
				path : "/first",
				component : first,
				children : [
					{
						name : "home",
						path : "/home",
						component : home
					},
					{
						name : "find",
						path : "/find",
						component : find,
						redirect : "/faxian",
						children : [
							{
								name : "faxian",
								path : "/faxian",
								component : faxian
							},
							{
								name : "tuijian",
								path : "/tuijian",
								component : tuijian
							}
						]
					},
					{
						name : "mzine",
						path : "/mzine",
						component : mzine
					},
					{
						name : "shopping",
						path : "/shopping",
						component : shopping
					},
					{
						name : "mine",
						path : "/mine",
						component : mine
					}
				]
			},
			{
				name : "guanyu",
				path : "/guanyu",
				component : guanyu
			},
			{
				name : "login",
				path : "/login",
				component : login
			},
			{
				name : "test",
				path : "/test",
				component : test
			},
			{
				name : "register",
				path : "/register",
				component : register
			},
			{
				name : "addgress",
				path : "/addgress",
				component : addgress
			},
			{
				name : "phonetest",
				path : "/phonetest",
				component : phonetest
			},
			{
				name : "jieshao",
				path : "/jieshao",
				component : jieshao
			},
			{
				name : "tuihuo",
				path : "/tuihuo",
				component : tuihuo
			},
			{
				name : "chima",
				path : "/chima",
				component : chima
			}
		]
	})
	return router
}