from rest_framework import serializers
from .models import Problem
from example.serializer import ExampleSerializer

class ProblemSerializer(serializers.ModelSerializer):
    examples = ExampleSerializer(many=True, read_only=True)
    class Meta:
        model = Problem
        fields = [
            'id', 'title', 'category', 'difficulty', 'likes', 'dislikes',
            'order', 'videoId', 'link', 'problemStatement', 'constraints',
            'handlerFunction', 'starterCode', 'starterFunctionName', 'examples'
        ]