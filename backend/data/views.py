from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings
from supabase import create_client, Client

url: str = settings.SUPABASE_URL
key: str = settings.SUPABASE_KEY
supabase: Client = create_client(url, key)

def load_from_supabase(table, orderBy) -> list:
    response = (
        supabase.table(table)
        .select("*")
        .order(orderBy, desc=True)
        .execute()
    )
    
    return response.data

@api_view(['GET'])
def stores_list(request):
    data = load_from_supabase("cfb_stores", "name")
    return Response(data)

@api_view(['GET'])
def support_list(request):
    data = load_from_supabase("cfb_support", "name")
    return Response(data)

@api_view(['GET'])
def partners_list(request):
    data = load_from_supabase("cfb_partners", "title")
    return Response(data)

@api_view(['GET'])
def links_list(request):
    data = load_from_supabase("cfb_links", "title")
    return Response(data)