#include<bits/stdc++.h>
using namespace std;
bool isprime(int n)
{
  if(n<=3) return true;

  for(int i=2;i<=sqrt(n);i++)
  {
    if(n%i==0) return false;
  }

  return true;
}
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
		int n;
		cin>>n;
		vector<int> s;
		for(int i=0;i<n;i++)
		{
			int x;
			cin>>x;
			s.push_back(x);
		}
		int n1=s.size();
		vector<int> v;
		for(int i=0;i<n1;i++)
		{
			int sum=0;
			for(int j=i+1;j<n1;j++)
			{
				sum+=s[i]+s[j];
				v.push_back(sum);
				sum=0;
			}
		}
		int count=0;
		int len=v.size();
		for(int i=0;i<len;i++)
		{
			if(isprime(v[i])) count++;
		}

		cout<<count<<endl;
		v.clear();
		s.clear();

	}
	return 0;
}