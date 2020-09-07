def fizz_buzz(n)
    if n % 15 === 0
        puts 'FizzBuzz'
    elsif n % 3 === 0
        puts  'Fizz'
    elsif  n % 5 === 0
        puts 'Buzz'
    else
        puts n.to_s
    end
end

for i in 1..100
    fizz_buzz(i)
end