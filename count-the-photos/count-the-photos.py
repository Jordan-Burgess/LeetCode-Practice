# def count_photos(road):
#     right = 0
#     camera = 0
#     right_count = 0
#     left_count = 0
    
#     for i in road:
#         if i == '>':
#             right += 1
#         if i == '.':
#             right_count += right
#             camera += 1
#         if i == '<':
#             left_count += camera
            
#     return right_count + left_count


def count_photos(road):
    right = 0
    camera = 0
    count = 0
    
    for i in road:
        # Keeps track of right cars
        if i == '>':
            right += 1
        # Keeps track of cameras(left_cars) / Add all the right cars that pass
        elif i == '.':
            count += right
            camera += 1
        # Adds all the left cars that will pass the cameras we kept track of. 
        elif i == '<':
            count += camera
        
    return count
