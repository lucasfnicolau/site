const iOSApps = [
  {
    name: 'CaptureML',
    url: 'https://apps.apple.com/us/app/captureml/id1474426871'
  },
  {
    name: 'PREMAX',
    url: ''
  },
  {
    name: 'Mackenzie',
    url: ''
  },
  {
    name: 'The Hatch',
    url: 'https://apps.apple.com/us/app/the-hatch-splashing-around/id1490932827'
  },
  {
    name: 'StudyO',
    url: 'https://apps.apple.com/us/app/studyorganizer/id1444526598'
  },
  {
    name: 'Simplex Calc',
    url: ''
  },
  {
    name: 'Singleton',
    url: 'https://apps.apple.com/us/app/studyorganizer/id1444526598'
  },
  {
    name: 'Troco Certo',
    url: ''
  },
  {
    name: 'Termos',
    url: 'https://apps.apple.com/us/app/termos-médicos/id1531619145'
  },
  {
    name: 'SIGLA',
    url: ''
  },
  {
    name: 'Fifômetro',
    url: ''
  },
  {
    name: 'Dopu',
    url: ''
  },
  {
    name: 'Game of Life',
    url: ''
  },
  {
    name: 'Rolêta',
    url: 'https://apps.apple.com/us/app/rolêta/id1504336358'
  },
  {
    name: 'Epic Ball',
    url: ''
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
  {
    name: 'World Cup',
  },
  {
    name: 'Be Fast!!'
  },
  {
    name: 'Lorian'
  }
];

var platform = 'iOS';

function setup() {
  const portfolioContainer = document.getElementById('portfolio-container');
  portfolioContainer.style.margin = '0';
  portfolioContainer.style.padding = '0';

  const deviceContainer = document.getElementById('device-container');
  deviceContainer.style.display = 'flex';
  deviceContainer.style.justifyContent = 'center';

  const deviceHeight = window.innerHeight / 1.2;
  const deviceWidth = deviceHeight * 0.501752746;

  const iOSDevice = document.getElementById('ios-device');
  iOSDevice.style.display = platform === 'iOS' ? 'flex' : 'none';
  iOSDevice.style.justifyContent = 'center';
  iOSDevice.style.width = `${deviceWidth}px`;
  iOSDevice.style.height = `${deviceHeight}px`;
  iOSDevice.style.background = 'url(./assets/img/iPhone_Bezel.png)';
  iOSDevice.style.backgroundRepeat = 'no-repeat';
  iOSDevice.style.backgroundSize = 'contain';
  iOSDevice.style.backgroundPosition = 'center';

  const iOSAppsGrid = document.getElementById('ios-apps');
  iOSAppsGrid.style.display = 'grid';
  iOSAppsGrid.style.width = `${deviceWidth}px`;
  iOSAppsGrid.style.marginTop = `${deviceHeight / 8}px`;
  iOSAppsGrid.style.marginLeft = '50px';
  iOSAppsGrid.style.marginRight = '50px';
  iOSAppsGrid.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
  iOSAppsGrid.style.gridTemplateRows = `repeat(${iOSApps.length}, 1fr)`;
  iOSAppsGrid.style.gridColumn = `${deviceHeight / 14}px`;
  iOSAppsGrid.style.visibility = platform === 'iOS' ? 'visible' : 'hidden';
  iOSAppsGrid.innerHTML = '';
  for (let i = 0; i < iOSApps.length; i++) {
    iOSAppsGrid.appendChild(appIcon(iOSApps[i].name, iOSApps[i].url, deviceHeight, 'iOS'));
  }

  const androidDevice = document.getElementById('android-device');
  androidDevice.style.display = platform === 'Android' ? 'flex' : 'none';
  androidDevice.style.justifyContent = 'center';
  androidDevice.style.width = `${deviceWidth}px`;
  androidDevice.style.height = `${deviceHeight}px`;
  androidDevice.style.background = 'url(./assets/img/Android_Bezel.png)';
  androidDevice.style.backgroundRepeat = 'no-repeat';
  androidDevice.style.backgroundSize = 'contain';
  androidDevice.style.backgroundPosition = 'center';

  const androidAppsGrid = document.getElementById('android-apps');
  androidAppsGrid.style.display = 'grid';
  androidAppsGrid.style.width = `${deviceWidth}px`;
  androidAppsGrid.style.marginTop = `${deviceHeight / 8}px`;
  androidAppsGrid.style.marginLeft = '50px';
  androidAppsGrid.style.marginRight = '50px';
  androidAppsGrid.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
  androidAppsGrid.style.gridTemplateRows = `repeat(${androidApps.length}, 1fr)`;
  androidAppsGrid.style.gridColumn = `${deviceHeight / 14}px`;
  androidAppsGrid.style.visibility = platform === 'Android' ? 'visible' : 'hidden';
  androidAppsGrid.innerHTML = '';
  for (let i = 0; i < androidApps.length; i++) {
    androidAppsGrid.appendChild(appIcon(androidApps[i].name, '', deviceHeight, 'Android'));
  }

  const platformSwitch = document.getElementById('platform-switch');
  platformSwitch.style.width = `${deviceWidth / 5.5}px`;
  platformSwitch.style.minWidth = '70px';
  platformSwitch.style.cursor = 'pointer';
  platformSwitch.onclick = switchPlatform;
  platformSwitch.src = platform === 'iOS' ? './assets/img/switch_ios.svg' : './assets/img/switch_android.svg';
  platformSwitch.alt = platform;
}

function switchPlatform() {
  platform = platform === 'iOS' ? 'Android' : 'iOS';
  setup();
}

function appIcon(name, url, deviceHeight, platform) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  div.className = name;
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.alignItems = 'center';
  div.style.marginBottom = '15px';
  div.style.cursor = 'pointer';
  div.style.width = `${deviceHeight / 9.8}px`;
  div.dataToggle = 'modal';
  div.dataTarget = 'portfolioModal';
  
  if (platform === 'iOS') {
    div.onclick = () => {
      $('#portfolioModal').modal();
      document.getElementById('modalImage').src = `./assets/img/portfolio/${name}/${name} Screenshot.png`;
      document.getElementById('portfolioModalLabel').innerText = name;
      document.getElementById('modalDescriptionLabel').innerText = '';
      document.getElementById('modalAppStoreURL').href = url;
      if (url === '') {
        document.getElementById('modalAppStoreButtonContainer').style.display = 'none';
      }
    };
  }

  const imgWidth = deviceHeight / 14;
  img.style.width = `${imgWidth}px`;
  img.style.borderRadius = `${platform === 'iOS' ? 0 : imgWidth}px`;
  img.style.marginBottom = '4px';
  img.src = `./assets/img/portfolio/${name}/${name}.png`;
  img.alt = name;

  span.innerText = name;
  span.style.textAlign = 'center';
  span.style.fontSize = `${deviceHeight / 70}px`;
  span.style.color = '#fff';

  div.appendChild(img);
  div.appendChild(span);

  return div;
}

window.onload = setup;
window.onresize = setup;