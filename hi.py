#!/usr/bin/env python3

infile = input("Enter input file name: ")
filein = open(infile, 'r')

outfile = input("Enter output file name: ")
fileout = open(outfile, 'w')

for line in filein:
    numbers = [float(num) for num in line.split()]
    
    mean = sum(numbers) / len(numbers)
    
    demeaned_output = [num - mean for num in numbers]

    print("%10.3f %10.3f %10.3f" % (numbers, mean, demeaned_output))

print("Demeaned numbers can be found in", outfile)

filein.close()
fileout.close()