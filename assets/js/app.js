import 'phoenix_html';
import '../css/app.scss';
import socket from './socket';
import WaterCooler from './water_cooler';

WaterCooler.init(socket);
