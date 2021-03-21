class pt2d:
    def __init__(self, x, y):
        self.x = 0
        self.y = 0

    def distance(self, other):
        distanceBetween = self - other
        return distanceBetween

    def in_same_cluster(self, other):
        sameCluster = False
        if self == other:
            sameCluster = True
            return sameCluster

    def merge_clusters(i, j):
        pass
