package bubble

func bubbleSort(nums []int) []int {
	N := len(nums)
	for i := 0; i < N; i++ {
		for j := 0; j < N-i-1; j++ {
			if nums[j] > nums[j+1] {
				nums[j], nums[j+1] = nums[j+1], nums[j]
			}
		}
	}
	return nums
}
