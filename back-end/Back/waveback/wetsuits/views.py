from django.http import Http404
from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import  *
from .models import *
from rest_framework.response import Response
from django.http import JsonResponse
import json 

class WetsuitsView(APIView):
    def get(self, request):
        wetsuits = Wetsuit.objects.all()
        print(wetsuits)
        serializer = WetsuitSerializer(data=wetsuits, many = True)
        serializer.is_valid(raise_exception=False)
        serializer.save()
        return Response(status=200, data=serializer.data)

    def put(self, request,  *args, **kwargs):
        return self.update_wetsuit(request, *args, **kwargs)
    def post(self, request, *args, **kwargs):
        return self.create_wetsuit(request, *args, **kwargs)
    def delete(self, request, *args, **kwargs):
        return self.delete_wetsuit(request, *args, **kwargs)
        
 
# @csrf_exempt 
    def create_wetsuit(self, request): 
        if request.method == 'POST': 
            data = json.loads(request.body) 
            serializer = WetsuitSerializer(data=data) 
            if serializer.is_valid(): 
                serializer.save() 
                return JsonResponse(serializer.data, status=201) 
            return JsonResponse(serializer.errors, status=400)


    def update_wetsuit(self,request, id): 
        if request.method == 'PUT': 
            data = json.loads(request.body) 
            try: 
                wetsuit = Wetsuit.objects.get(id=id) 
                serializer = WetsuitSerializer(wetsuit, data=data) 
                if serializer.is_valid(): 
                    serializer.save() 
                    return JsonResponse(serializer.data, status=200) 
                return JsonResponse(serializer.errors, status=400) 
            except Wetsuit.DoesNotExist: 
                return JsonResponse({'message': 'Wetsuit not found.'}, status=404)

    def delete_wetsuit(self, request, id): 
        if request.method == 'DELETE': 
            try: 
                wetsuit = Wetsuit.objects.get(id=id) 
                wetsuit.delete() 
                return JsonResponse({'message': 'Wetsuit deleted successfully.'}, status=204) 
            except Wetsuit.DoesNotExist: 
                return JsonResponse({'message': 'Wetsuit not found.'}, status=404)
        
    

class WetsuitsByCategoryView(APIView):

    def get_object(self, category):
        try:
            return Wetsuit.objects.filter(category = category)
        except Wetsuit.DoesNotExist:
            raise Http404
        
    def get(self, request, category):
        wetsuits = self.get_object(category)
        print(wetsuits)
        serializers = WetsuitSerializer(wetsuits, many = True)
        return Response(serializers.data)

# Create your views here.
