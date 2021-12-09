const iOSApps = [
  {
    name: 'CaptureML',
  },
  {
    name: 'PREMAX',
  },
  {
    name: 'Mackenzie',
  },
  {
    name: 'The Hatch',
  },
  {
    name: 'StudyO',
  },
  {
    name: 'Simplex Calc',
  },
  {
    name: 'Singleton',
  },
  {
    name: 'Troco Certo',
  },
  {
    name: 'Termos',
  },
  {
    name: 'SIGLA',
  },
  {
    name: 'Fifômetro'
  },
  {
    name: 'Dopu',
  },
  {
    name: 'Game of Life'
  },
  {
    name: 'Rolêta',
  },
  {
    name: 'Epic Ball',
  },
];

const androidApps = [
  {
    name: 'Fifômetro'
  },
  {
    name: 'Epic Ball',
  },
  {
    name: 'Termos',
  },
  {
    name: 'Mackenzie',
  },
];

var platform = 'iOS';

function setup() {
  const portfolioContainer = document.getElementById('portfolio-container');
  portfolioContainer.style.margin = '0';
  portfolioContainer.style.padding = '0';

  const deviceContainer = document.getElementById('device-container');
  deviceContainer.style.display = 'flex';
  deviceContainer.style.justifyContent = 'center';

  const device = document.getElementById('device');
  const deviceHeight = window.innerHeight / 1.2;
  const deviceWidth = deviceHeight * 0.501752746;
  device.style.display = 'flex';
  device.style.justifyContent = 'center';
  device.style.width = `${deviceWidth}px`;
  device.style.height = `${deviceHeight}px`;
  device.style.background = `${platform === 'iOS' ? 'url(./assets/img/iPhone_Bezel.png)' : 'url(./assets/img/android_Bezel.png)' }`;
  device.style.backgroundRepeat = 'no-repeat';
  device.style.backgroundSize = 'contain';
  device.style.backgroundPosition = 'center';

  const appIcons = (platform === 'iOS' ? iOSApps : androidApps);
  const apps = document.getElementById('apps');
  apps.style.display = 'grid';
  apps.style.width = `${deviceWidth}px`;
  apps.style.marginTop = `${deviceHeight / 8}px`;
  apps.style.marginLeft = '50px';
  apps.style.marginRight = '50px';
  apps.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
  apps.style.gridTemplateRows = `repeat(${appIcons.length}, 1fr)`;
  apps.style.gridColumn = `${deviceHeight / 14}px`;
  apps.innerHTML = '';
  for (let i = 0; i < appIcons.length; i++) {
    apps.appendChild(appIcon(appIcons[i].name, deviceHeight));
  }

  const platformSwitch = document.getElementById('platform-switch');
  platformSwitch.style.width = `${deviceWidth / 5.5}px`;
  platformSwitch.style.cursor = 'pointer';
  platformSwitch.onclick = switchPlatform;
  platformSwitch.src = platform === 'iOS' ? './assets/img/switch_ios.svg' : './assets/img/switch_android.svg';
  platformSwitch.alt = platform;
}

function switchPlatform() {
  platform = platform === 'iOS' ? 'Android' : 'iOS';
  setup();
}

function appIcon(name, deviceHeight) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.alignItems = 'center';
  div.style.marginBottom = '15px';
  div.style.cursor = 'pointer';
  div.style.width = `${deviceHeight / 9.8}px`;

  const imgWidth = deviceHeight / 14;
  img.style.width = `${imgWidth}px`;
  img.style.borderRadius = `${platform === 'iOS' ? 0 : imgWidth}px`;
  img.style.marginBottom = '4px';
  img.src = `./assets/img/portfolio/${name}.png`;
  img.alt = name;

  span.innerText = name;
  span.style.textAlign = 'center';
  span.style.fontSize = `${window.innerHeight / 100}px`;
  span.style.color = '#fff';

  div.appendChild(img);
  div.appendChild(span);

  return div;
}

window.onload = setup;
window.onresize = setup;