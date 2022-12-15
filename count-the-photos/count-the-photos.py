def count_photos(road):
    right = 0
    camera = 0
    right_count = 0
    left_count = 0
    
    for i in road:
        if i == '>':
            right += 1
        if i == '.':
            right_count += right
            camera += 1
        if i == '<':
            left_count += camera
            
    return right_count + left_count
