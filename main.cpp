#include <iostream>

using namespace std;

const int MIN = 1;
const int MAX = 100;
const int FIZZ = 3;
const int BUZZ = 5;

int main(int argc, char **argv)
{
    for ( int loop = MIN; loop <= MAX; loop++ )
    {
        if ( loop % FIZZ == 0 ) cout << "Fizz";
        if ( loop % BUZZ == 0 ) cout << "Buzz";
        if ( loop % FIZZ != 0 && loop % BUZZ != 0 ) cout << loop;
        cout << endl;
    }

    return 0;
}
