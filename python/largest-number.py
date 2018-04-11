"""
https://hooyes.net/p/python-largest-number
"""

# Python2

class Solution:
    def largestNumber(self, nums):
        scmp = lambda a,b: int(b+a)-int(a+b)
        res = ''.join(sorted(map(str, nums), cmp=scmp)).lstrip('0')
        return res or '0'


"""

# Python3 

from functools import cmp_to_key
class Solution:
    def largestNumber(self, nums):
        key = cmp_to_key(lambda a,b: int(b+a)-int(a+b))
        res = ''.join(sorted(map(str, nums), key=key)).lstrip('0')
        return res or '0'

"""

"""

# Python2

class Solution:
    def largestNumber(self,nums):
        def cxx(x,y):
            i = 0 
            sx= str(x)
            sy= str(y)
            while i< len(str(min(x,y))):
                if sx[i] > sy[i]:
                    return 1
                elif sx[i] < sy[i]:
                    return -1
                elif x == y:
                    return 0
                i+=1
            if i == len(sx):
                return -1 if sy[i]>sy[0] else 1
            if i == len(sy):
                return 1 if sx[i]>sx[0] else -1
        nx = sorted(nums,cmp=lambda x,y:cxx(x,y),reverse=True)        
        res = ''.join(map(str, nx)).lstrip('0')
        return res or '0'   

"""

t = Solution()
nums = [1, 20, 23, 4, 8]
print(t.largestNumber(nums))