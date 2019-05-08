from django.shortcuts import render
from .serializer import MemoSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Memo

# Create your views here.
@api_view(['POST'])
def memo_create(request):
    serializer = MemoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

@api_view(['GET'])
def memo_list(request):
    memos = Memo.objects.all()
    serializer = MemoSerializer(memos, many=True)
    return Response(serializer.data)