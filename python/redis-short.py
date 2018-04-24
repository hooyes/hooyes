import redis

class ShortenURL:

	_alphabet = '0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ-_'
	_base = len(_alphabet)

	def encode(self, number):
		string = ''
		while(number > 0):
			string = self._alphabet[number % self._base] + string
			number //= self._base
		return string

	def decode(self, string):
		number = 0
		for char in string:
			number = number * self._base + self._alphabet.index(char)
		return number


t = ShortenURL()

# Redis 作为ID发号器 
r = redis.StrictRedis(host='127.0.0.1', port=6379, db=0,password='hooyes')
if r.exists('SID') != 1:
	r.set('SID',12345677)

r.incr('SID')

sid = int(r.get('SID'))

# 生成短网址，假如域名为 85.si

sn = t.encode(sid)
shorturl = 'https://85.si/' + sn
print(shorturl)

# 通过 ShortURL SN 解码到原SID

print(t.decode(sn))


