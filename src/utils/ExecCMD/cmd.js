import * as API from '../../api/index';
import config from '../../utils/config.json';
import * as AvaliableCMDs from '../ExecCMD/index';

export const help = async (args) => {
  const commands = Object.keys(AvaliableCMDs).sort().join(', ');
  return `Available commands:\n${commands}\nTry TAB for auto completion.`;
}

export const social = async (args) => {
	let tempArg = '';
	if(args.length === 0){
		return Object.keys(config.social).map(sc => (
			`${sc} : <a href="${config.social[sc]}" target="_blank">${config.social[sc]}</a> \n`
		))
	} else if(args.length === 1 && args[0] === '--help' || args[0] === '--h' ){
		return `Try "social" or "social github" \n`
	} else if(args.length === 1 && Object.keys(config.social).some( (se) => {tempArg = se; return se.toLocaleLowerCase() === args[0].toLocaleLowerCase(); } )){
		return `${tempArg} : <a href="${config.social[tempArg]}" target="_blank">${config.social[tempArg]}</a> \n`
	} else {
		return `Invalid Arguments Try "social" or "social --help"\n`
	}
}

export const clear = async () => {
 return ``; 
}

export const theme = async (args) => {
  return '';
}

export const inspireme = async () => {
	return API.getRandomQuote();
}

export const email = async () => {
	return `Email : <a href="${config.email}">${config.email}</a>`
}

export const github = async() => {
	return `GitHub : <a href="${config.social.GitHub}" target="_blank">${config.social.GitHub}</a>\n`
}

export const linkden = async () => {
	return `Linkden : <a href="${config.social.Linkedin}" target="_blank">${config.social.Linkedin}</a>\n`;
}

export const echo = async (args) => {
  return args.join(' ');
}

export const whoami = async (args) => {
  return 'guest';
}

export const banner = async(args) => {

  //  ██████╗  █████╗ ██╗   ██╗██████╗  █████╗ ██╗   ██╗    ███████╗██╗  ██╗ █████╗ ███╗   ██╗██╗  ██╗ █████╗ ██████╗ 
  // ██╔════╝ ██╔══██╗██║   ██║██╔══██╗██╔══██╗██║   ██║    ██╔════╝██║  ██║██╔══██╗████╗  ██║██║ ██╔╝██╔══██╗██╔══██╗
  // ██║  ███╗███████║██║   ██║██████╔╝███████║██║   ██║    ███████╗███████║███████║██╔██╗ ██║█████╔╝ ███████║██████╔╝
  // ██║   ██║██╔══██║██║   ██║██╔══██╗██╔══██║╚██╗ ██╔╝    ╚════██║██╔══██║██╔══██║██║╚██╗██║██╔═██╗ ██╔══██║██╔══██╗
  // ╚██████╔╝██║  ██║╚██████╔╝██║  ██║██║  ██║ ╚████╔╝     ███████║██║  ██║██║  ██║██║ ╚████║██║  ██╗██║  ██║██║  ██║
  //  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝      ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝

  // ░██████╗░░█████╗░██╗░░░██╗██████╗░░█████╗░██╗░░░██╗  ░██████╗██╗░░██╗░█████╗░███╗░░██╗██╗░░██╗░█████╗░██████╗░
  // ██╔════╝░██╔══██╗██║░░░██║██╔══██╗██╔══██╗██║░░░██║  ██╔════╝██║░░██║██╔══██╗████╗░██║██║░██╔╝██╔══██╗██╔══██╗
  // ██║░░██╗░███████║██║░░░██║██████╔╝███████║╚██╗░██╔╝  ╚█████╗░███████║███████║██╔██╗██║█████═╝░███████║██████╔╝
  // ██║░░╚██╗██╔══██║██║░░░██║██╔══██╗██╔══██║░╚████╔╝░  ░╚═══██╗██╔══██║██╔══██║██║╚████║██╔═██╗░██╔══██║██╔══██╗
  // ╚██████╔╝██║░░██║╚██████╔╝██║░░██║██║░░██║░░╚██╔╝░░  ██████╔╝██║░░██║██║░░██║██║░╚███║██║░╚██╗██║░░██║██║░░██║
  // ░╚═════╝░╚═╝░░╚═╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░  ╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝

  return `
  ░██████╗░░█████╗░██╗░░░██╗██████╗░░█████╗░██╗░░░██╗  ░██████╗██╗░░██╗░█████╗░███╗░░██╗██╗░░██╗░█████╗░██████╗░
  ██╔════╝░██╔══██╗██║░░░██║██╔══██╗██╔══██╗██║░░░██║  ██╔════╝██║░░██║██╔══██╗████╗░██║██║░██╔╝██╔══██╗██╔══██╗
  ██║░░██╗░███████║██║░░░██║██████╔╝███████║╚██╗░██╔╝  ╚█████╗░███████║███████║██╔██╗██║█████═╝░███████║██████╔╝
  ██║░░╚██╗██╔══██║██║░░░██║██╔══██╗██╔══██║░╚████╔╝░  ░╚═══██╗██╔══██║██╔══██║██║╚████║██╔═██╗░██╔══██║██╔══██╗
  ╚██████╔╝██║░░██║╚██████╔╝██║░░██║██║░░██║░░╚██╔╝░░  ██████╔╝██║░░██║██║░░██║██║░╚███║██║░╚██╗██║░░██║██║░░██║
  ░╚═════╝░╚═╝░░╚═╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░  ╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝                                                                                                                                                
                                                                                                                                                                                                                                                                       
  Version : ${config.version}
  Type help to see list of avalaible command
  `;
}