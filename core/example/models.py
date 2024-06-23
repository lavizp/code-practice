from django.db import models
from problem.models import Problem
# Create your models here.
class Example(models.Model):
    id = models.AutoField(primary_key=True)
    inputText = models.TextField()
    outputText = models.TextField()
    explanation = models.TextField(blank=True, null=True)
    img = models.URLField(blank=True, null=True)
    problem = models.ForeignKey(Problem, related_name='examples', on_delete=models.CASCADE)

    def __str__(self):
        return self.inputText[:50]  # Short representation for the admin interface