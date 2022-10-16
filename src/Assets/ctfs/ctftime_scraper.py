import json
import requests
from bs4 import BeautifulSoup
import bs4


def parser(i: int, table_entry: bs4.element.Tag) -> dict:
    print(i)
    if len(table_entry) < 5:
        return {}
    result = {
        'place': table_entry.contents[1].text,
        'link': base + str(table_entry.contents[2]).split('"')[1],
        'ctf_name': table_entry.contents[2].text,
        'logo': '',
        'description': ''
    }
    req = requests.get(result['link'], headers={'user-agent': UA})
    tmp_soup = BeautifulSoup(req.text, 'html.parser')
    result['description'] = tmp_soup.find(id='id_description').text.strip() if tmp_soup.find(id='id_description') else ''
    result['logo'] = tmp_soup.find(class_='span2').contents[1]['src']
    return result


team_id = 176008
base = 'https://ctftime.org'
team = f'https://ctftime.org/team/{team_id}'

UA = "Mozilla/5.0 (X11; Linux x86_64; rv:105.0) Gecko/20100101 Firefox/105.0"

r = requests.get(team, headers={'user-agent': UA})

soup = BeautifulSoup(r.text, 'html.parser')

dump = soup.findAll('tr')[1:]
print(dump)
ctfs = [parser(i, e) for i, e in enumerate(dump)]
ctfs = [i for i in ctfs if i]
final = {'ctfs': ctfs}
print(json.dumps(final))
with open('ctfs.json', 'w') as f:
    f.write(json.dumps(final))
