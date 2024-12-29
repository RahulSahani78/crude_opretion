#include <iostream>
using namespace std;

// int findmax(int n,int arr[],int maxi)
// {
//     if(n==0)
//       return maxi;
    
//     if(arr[n-1]>maxi)
//       maxi=arr[n-1];

//     findmax(n-1,arr,maxi);

    

// }


// int main()
// {
//     int k=5;
//     int arr[5]={12,56,11,44,33};
//     int maxi=-1;
     
//     int x=findmax(k,arr,maxi);
//     cout<<"the max is"<<x;
//     return 0;
// }



// void isavailable(string s,int n,bool &x,char c){

//   if(n==0)
//   return;

//   if(s[n-1]==c)
//     x=true;

//   isavailable(s,n-1,x,c);


// }

// int main()
// {
//   string S = "manshu";
//   char c= 'r';
//   bool x=false;

//   isavailable(S,6,x,c);

//   cout<<"answer is "<<x;

//   return 0;


// }


// void printdigits(int n)
// {
//   if(n==0)
//    return;

//     printdigits(n/10);
//     cout<<n%10<<endl;
// }

// int main(){
//   int n=5768;
  
//   printdigits(n);

//   return 0;

// }