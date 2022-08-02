bob = [1,2,3,4,5]

p bob.shuffle!
p bob


bob.each_with_index do |value, index|
  p value
end

# bob.forEach((value, index) => console.log(value, index))