import bs4
import urllib.request
from urllib.request import urlopen
from bs4 import BeautifulSoup as soup

filename = 'countries.json'
htmldata = urlopen('https://olympics.com/tokyo-2020/olympic-games/en/results/all-sports/nocs-list.htm')
bsobj = soup(htmldata.read(), 'html.parser')
imgs = bsobj.findAll('img', {'class': 'flagStyleBig'})
country_names = bsobj.findAll('div', {'class': 'mx-auto font-weight-bold'})

for i in range(0, len(imgs)):
  img_src = imgs[i].get('src').split('../')
  img_url = 'https://olympics.com/tokyo-2020/olympic-games/' + img_src[3]
  urllib.request.urlretrieve(img_url, '../src/assets/' + country_names[i].text + '.png')
