from django.db import models

# Create your models here.

class Problem(models.Model):
    DIFFICULTY_CHOICES = [
        ('Easy', 'Easy'),
        ('Medium', 'Medium'),
        ('Hard', 'Hard'),
    ]
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=200)
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    order = models.IntegerField()
    videoId = models.CharField(max_length=100, blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    problemStatement = models.TextField()  # Store HTML as text
    constraints = models.TextField()  # Store HTML as text
    handlerFunction = models.TextField()
    starterCode = models.TextField()
    starterFunctionName = models.CharField(max_length=100)

    def __str__(self):
        return self.title