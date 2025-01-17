import { Plugin } from 'webpack';
import WebpackNotifierPlugin = require('../');

const optionsArray: WebpackNotifierPlugin.Options[] = [
	{
		title: 'Webpack',
		contentImage: 'logo.png',
		excludeWarnings: true,
		alwaysNotify: true,
		skipFirstNotification: true,
		emoji: true,
	},
	{
		title: (data: {msg: string,message: string,status: string}) => 'Webpack',
	},
];

const plugins: Plugin[] = optionsArray.map(options => new WebpackNotifierPlugin(options));
