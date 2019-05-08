from django.urls import path
from . import views

urlpatterns = [
    # 메모를 작성하는 url
    path('memos/create/', views.memo_create),
    # 모든 메모를 가져오는 url
    path('memos/', views.memo_list),
]