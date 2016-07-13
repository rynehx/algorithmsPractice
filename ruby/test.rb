class Calculator
  def initialize
    @store = 0
  end

  def add(i)
    @store+=i
  end

  def subtract(i)
    @store-=i
  end

  def show
    @store
  end

end



calc = Calculator.new

calc.add(5)

calc.subtract(2)

puts calc.show
